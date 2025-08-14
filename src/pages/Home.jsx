import React, { useEffect, useState } from 'react';

function Home() {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: '', clean_type: '', email: '' });
  const [editCustomer, setEditCustomer] = useState(null);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [filterCleanType, setFilterCleanType] = useState('');

  const cleanTypes = ['Spring Clean', 'End of Lease', 'Super Clean'];

  useEffect(() => {
    // Fetch the data from the clean.json file in the public folder
    fetch('/clean.json')
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        setFilteredCustomers(data);
        localStorage.setItem('cleanData', JSON.stringify(data));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({
      ...newCustomer,
      [name]: value,
    });
  };

  const handleAddCustomer = () => {
    // Email validation using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!newCustomer.name || !newCustomer.clean_type || !newCustomer.email) {
      alert('All fields are required!');
      return;
    }
    if (!emailRegex.test(newCustomer.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const updatedCustomers = [...customers, newCustomer];
    setCustomers(updatedCustomers);
    setFilteredCustomers(updatedCustomers);
    localStorage.setItem('cleanData', JSON.stringify(updatedCustomers));
    setNewCustomer({ name: '', clean_type: '', email: '' });
  };

  const handleEditCustomer = (customer) => {
    setEditCustomer(customer);
  };

  const handleConfirmEdit = () => {
    // Email validation using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!editCustomer.name || !editCustomer.clean_type || !editCustomer.email) {
      alert('All fields are required!');
      return;
    }
    if (!emailRegex.test(editCustomer.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const updatedCustomers = customers.map((customer) =>
      customer.email === editCustomer.email ? editCustomer : customer
    );
    setCustomers(updatedCustomers);
    setFilteredCustomers(updatedCustomers);
    localStorage.setItem('cleanData', JSON.stringify(updatedCustomers));
    setEditCustomer(null);
  };

  const handleDeleteCustomer = () => {
    const updatedCustomers = customers.filter((customer) => customer.email !== customerToDelete.email);
    setCustomers(updatedCustomers);
    setFilteredCustomers(updatedCustomers);
    localStorage.setItem('cleanData', JSON.stringify(updatedCustomers));
    setDeleteDialogOpen(false);
  };

  const openDeleteDialog = (customer) => {
    setCustomerToDelete(customer);
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setCustomerToDelete(null);
  };

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
    filterCustomers(e.target.value, filterCleanType);
  };

  const handleFilterChange = (e) => {
    setFilterCleanType(e.target.value);
    filterCustomers(searchName, e.target.value);
  };

  const filterCustomers = (name, cleanType) => {
    let filtered = customers;
    if (name) {
      filtered = filtered.filter((customer) =>
        customer.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (cleanType) {
      filtered = filtered.filter((customer) => customer.clean_type === cleanType);
    }
    setFilteredCustomers(filtered);
  };

  return (
    <div style={styles.container}>

      <div style={styles.addCustomer}>
        <h2 style={styles.subHeading}>Add New Customer</h2>
        <div style={styles.formContainer}>
          <input
            type="text"
            name="name"
            value={newCustomer.name}
            onChange={handleInputChange}
            placeholder="Name"
            style={styles.inputField}
          />
          <select
            name="clean_type"
            value={newCustomer.clean_type}
            onChange={handleInputChange}
            style={styles.inputField}
          >
            <option value="">Select Clean Type</option>
            {cleanTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <input
            type="email"
            name="email"
            value={newCustomer.email}
            onChange={handleInputChange}
            placeholder="Email"
            style={styles.inputField}
          />
          <button onClick={handleAddCustomer} style={styles.btnAdd}>Add Now</button>
        </div>
      </div>

      <h2 style={styles.subHeading}>Customer List</h2>

      <div style={styles.filterContainer}>
        <input
          type="text"
          value={searchName}
          onChange={handleSearchChange}
          placeholder="Search by name"
          style={styles.inputField}
        />
        <select
          value={filterCleanType}
          onChange={handleFilterChange}
          style={styles.inputField}
        >
          <option value="">Filter by Clean Type</option>
          {cleanTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <table style={styles.customerTable}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Clean Type</th>
            <th style={styles.tableHeader}>Email</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.email}>
              <td style={styles.tableData}>{customer.name}</td>
              <td style={styles.tableData}>{customer.clean_type}</td>
              <td style={styles.tableData}>{customer.email}</td>
              <td style={styles.tableData}>
                <button onClick={() => handleEditCustomer(customer)} style={styles.btnEdit}>Edit</button>
                <span style={styles.buttonSpacer}></span> {/* Spacer between Edit and Delete */}
                <button onClick={() => openDeleteDialog(customer)} style={styles.btnDelete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editCustomer && (
        <div style={styles.modal}>
          <h2>Edit Customer</h2>
          <div style={styles.formContainer}>
            <input
              type="text"
              name="name"
              value={editCustomer.name}
              onChange={(e) => setEditCustomer({ ...editCustomer, name: e.target.value })}
              placeholder="Name"
              style={styles.inputField}
            />
            <select
              name="clean_type"
              value={editCustomer.clean_type}
              onChange={(e) => setEditCustomer({ ...editCustomer, clean_type: e.target.value })}
              style={styles.inputField}
            >
              <option value="">Select Clean Type</option>
              {cleanTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <input
              type="email"
              name="email"
              value={editCustomer.email}
              onChange={(e) => setEditCustomer({ ...editCustomer, email: e.target.value })}
              placeholder="Email"
              style={styles.inputField}
            />
            <button onClick={handleConfirmEdit} style={styles.btnConfirm}>Confirm Edit</button>
            <button onClick={() => setEditCustomer(null)} style={styles.btnCancel}>Cancel</button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {isDeleteDialogOpen && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h3>Are you sure you want to delete this customer?</h3>
            <button onClick={handleDeleteCustomer} style={styles.btnDelete}>Yes, Delete</button>
            <button onClick={closeDeleteDialog} style={styles.btnCancel}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7fc',
    color: '#333',
    margin: 0,
    padding: '20px',
    boxSizing: 'border-box',
    maxWidth: '1200px',
    margin: 'auto',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#2c3e50',
  },
  subHeading: {
    marginTop: '20px',
    fontSize: '1.8rem',
    textAlign: 'center',
    color: '#34495e',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    margin: '0 auto',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  btnAdd: {
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  btnEdit: {
    backgroundColor: '#f39c12',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  btnDelete: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  btnConfirm: {
    backgroundColor: '#2ecc71',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  btnCancel: {
    backgroundColor: '#95a5a6',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  customerTable: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    backgroundColor: '#34495e',
    color: '#fff',
    padding: '10px 15px',
    textAlign: 'left',
  },
  tableData: {
    padding: '10px 15px',
    borderBottom: '1px solid #ccc',
  },
  buttonSpacer: {
    margin: '0 10px',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  // Media Queries for Mobile Responsiveness
  '@media (max-width: 768px)': {
    container: {
      padding: '10px',
    },
    subHeading: {
      fontSize: '1.5rem',
    },
    formContainer: {
      maxWidth: '100%',
      padding: '0 10px',
    },
    inputField: {
      padding: '8px',
      margin: '8px 0',
    },
    btnAdd: {
      padding: '8px 16px',
      fontSize: '0.9rem',
    },
    filterContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    customerTable: {
      fontSize: '0.9rem', // Reduce font size
    },
    tableHeader: {
      padding: '8px 10px',
    },
    tableData: {
      padding: '8px 10px',
    },
    btnEdit: {
      padding: '8px 12px',
    },
    btnDelete: {
      padding: '8px 12px',
    },
    btnConfirm: {
      padding: '8px 16px',
    },
    btnCancel: {
      padding: '8px 16px',
    },
  },

  '@media (max-width: 480px)': {
    heading: {
      fontSize: '2rem', // Smaller font size on small screens
    },
    subHeading: {
      fontSize: '1.3rem',
    },
    formContainer: {
      maxWidth: '100%',
      padding: '0 5px',
    },
    inputField: {
      fontSize: '0.9rem',
      padding: '6px',
    },
    btnAdd: {
      padding: '6px 12px',
      fontSize: '0.8rem',
    },
    filterContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    customerTable: {
      fontSize: '0.8rem', // Even smaller font size
    },
    tableHeader: {
      padding: '6px 8px',
    },
    tableData: {
      padding: '6px 8px',
    },
    btnEdit: {
      padding: '6px 10px',
    },
    btnDelete: {
      padding: '6px 10px',
    },
    btnConfirm: {
      padding: '6px 12px',
    },
    btnCancel: {
      padding: '6px 12px',
    },
  },
};

export default Home;
