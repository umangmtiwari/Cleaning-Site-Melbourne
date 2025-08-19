import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

function Home() {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: '', clean_type: '', email: '' });
  const [editCustomer, setEditCustomer] = useState(null);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [filterCleanType, setFilterCleanType] = useState('');
  const [notification, setNotification] = useState({
  open: false,
  message: '',
  severity: 'success', // 'success' or 'error'
});
  const cleanTypes = ['Spring Clean', 'End of Lease', 'Super Clean'];
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');

  const showNotification = (message, severity = 'success') => {
  setNotification({ open: true, message, severity });
};

const handleCloseNotification = (event, reason) => {
  if (reason === 'clickaway') return;
  setNotification(prev => ({ ...prev, open: false }));
};


useEffect(() => {
  fetch(`${process.env.REACT_APP_BACKEND_URL}/api/customers.php`)
    .then((res) => res.json())
    .then((data) => {
      setCustomers(data);
      setFilteredCustomers(data);
    })
    .catch((err) => console.error("API Error:", err));
}, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({
      ...newCustomer,
      [name]: value,
    });
  };

const handleAddCustomer = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!newCustomer.name || !newCustomer.clean_type || !newCustomer.email) {
    showNotification('All fields are required!', 'error');
    return;
  }

  if (!emailRegex.test(newCustomer.email)) {
    showNotification('Please enter a valid email address.', 'error');
    return;
  }

  fetch(`${process.env.REACT_APP_BACKEND_URL}/api/customers.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newCustomer),
  })
    .then(res => res.json())
    .then(response => {
      console.log('Add customer response:', response); // You can remove this after debugging

      if (response.success === true) {
        // Re-fetch the customers after adding
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/customers.php`)
          .then(res => res.json())
          .then(data => {
            setCustomers(data);
            setFilteredCustomers(data);
            setNewCustomer({ name: '', clean_type: '', email: '' });
            showNotification('Customer added successfully!', 'success');
          })
          .catch(() => {
            showNotification('Customer added, but failed to refresh list.', 'warning');
          });
      } else {
        showNotification('Failed to add customer.', 'error');
      }
    })
    .catch(err => {
      console.error('Error adding customer:', err);
      showNotification('An unexpected error occurred.', 'error');
    });
};



  const handleEditCustomer = (customer) => {
    setEditCustomer(customer);
  };

const handleConfirmEdit = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!editCustomer.name || !editCustomer.clean_type || !editCustomer.email) {
    showNotification('All fields are required!', 'error');
    return;
  }

  if (!emailRegex.test(editCustomer.email)) {
    showNotification('Please enter a valid email address.', 'error');
    return;
  }

  fetch(`${process.env.REACT_APP_BACKEND_URL}/api/customers.php`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(editCustomer),
  })
    .then(res => res.json())
    .then(response => {
      if (response.success === true) {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/customers.php`)
          .then(res => res.json())
          .then(data => {
            setCustomers(data);
            setFilteredCustomers(data);
            setEditCustomer(null);
            showNotification('Customer updated successfully!', 'success');
          })
          .catch(() => {
            showNotification('Customer updated, but failed to refresh list.', 'warning');
          });
      } else {
        showNotification('Failed to update customer.', 'error');
      }
    })
    .catch(err => {
      console.error('Error editing customer:', err);
      showNotification('An unexpected error occurred while editing.', 'error');
    });
};
const handleDeleteCustomer = () => {
  fetch(`${process.env.REACT_APP_BACKEND_URL}/api/customers.php`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${encodeURIComponent(customerToDelete.email)}`,
  })
    .then(res => res.json())
    .then(response => {
      if (response.success === true) {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/customers.php`)
          .then(res => res.json())
          .then(data => {
            setCustomers(data);
            setFilteredCustomers(data);
            setDeleteDialogOpen(false);
            showNotification('Customer deleted successfully!', 'success');
          })
          .catch(() => {
            showNotification('Customer deleted, but failed to refresh list.', 'warning');
          });
      } else {
        showNotification('Failed to delete customer.', 'error');
      }
    })
    .catch(err => {
      console.error('Error deleting customer:', err);
      showNotification('An unexpected error occurred while deleting.', 'error');
    });
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
  let filtered = [...customers];
  if (name) {
    filtered = filtered.filter((customer) =>
      customer.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  if (cleanType) {
    filtered = filtered.filter((customer) => customer.clean_type === cleanType);
  }

  // Sort alphabetically
  filtered.sort((a, b) => {
    if (sortOrder === 'asc') return a.name.localeCompare(b.name);
    return b.name.localeCompare(a.name);
  });

  setFilteredCustomers(filtered);
  setCurrentPage(1); // reset to first page when filter changes
};

const itemsPerPage = 5;
const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
const paginatedCustomers = filteredCustomers.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

  return (
    <Box sx={{ p: 2, maxWidth: '1200px', mx: 'auto' }}>
      {/* Add Customer Section */}
      <Typography variant="h5" align="center" gutterBottom>
        Add New Customer
      </Typography>

      <Grid container spacing={2} justifyContent="center" mb={3}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            name="name"
            label="Full Name"
            value={newCustomer.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            name="email"
            label="Email Address"
            type="email"
            value={newCustomer.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Select
            fullWidth
            name="clean_type"
            value={newCustomer.clean_type}
            onChange={handleInputChange}
            displayEmpty
          >
            <MenuItem value="">
              <em>Select Clean Type</em>
            </MenuItem>
            {cleanTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button fullWidth variant="contained" color="success" onClick={handleAddCustomer}>
            Add Now
          </Button>
        </Grid>
      </Grid>

      {/* Customer List Section */}
      <Typography variant="h5" align="center" gutterBottom>
        Customer List
      </Typography>

      {/* Filter Section */}
      <Grid container spacing={2} justifyContent="center" mb={2}>
        <Grid item xs={12} sm={4} md={3}>
          <TextField
            fullWidth
            placeholder="Search by name..."
            value={searchName}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Select
            fullWidth
            value={filterCleanType}
            onChange={handleFilterChange}
            displayEmpty
          >
            <MenuItem value="">
              <em>All Types</em>
            </MenuItem>
            {cleanTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Select
            fullWidth
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              filterCustomers(searchName, filterCleanType);
            }}
          >
            <MenuItem value="asc">Sort A-Z</MenuItem>
            <MenuItem value="desc">Sort Z-A</MenuItem>
          </Select>
        </Grid>
      </Grid>

      {/* Table */}
      <Box sx={{ overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Clean Type</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCustomers.map((customer) => (
              <TableRow key={customer.email}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.clean_type}</TableCell>
                <TableCell>{customer.email}</TableCell>
<TableCell>
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: 1,
      alignItems: 'flex-start',
    }}
  >
    <Button
      variant="contained"
      color="warning"
      size="small"
      onClick={() => handleEditCustomer(customer)}
    >
      Edit
    </Button>
    <Button
      variant="contained"
      color="error"
      size="small"
      onClick={() => openDeleteDialog(customer)}
    >
      Delete
    </Button>
  </Box>
</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* Pagination */}
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </Button>
        <Typography component="span" sx={{ mx: 2 }}>
          Page {currentPage} of {totalPages}
        </Typography>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          &gt;
        </Button>
      </Box>

      {/* Edit Customer Dialog */}
      <Dialog open={!!editCustomer} onClose={() => setEditCustomer(null)} fullWidth maxWidth="xs">
        <DialogTitle>Edit Customer</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              name="name"
              label="Full Name"
              value={editCustomer?.name || ''}
              onChange={(e) => setEditCustomer({ ...editCustomer, name: e.target.value })}
            />
            <Select
              fullWidth
              name="clean_type"
              value={editCustomer?.clean_type || ''}
              onChange={(e) => setEditCustomer({ ...editCustomer, clean_type: e.target.value })}
              displayEmpty
            >
              <MenuItem value="">
                <em>Select Clean Type</em>
              </MenuItem>
              {cleanTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
            <TextField
              fullWidth
              name="email"
              label="Email"
              type="email"
              value={editCustomer?.email || ''}
              disabled
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={handleConfirmEdit}>
            Confirm
          </Button>
          <Button variant="contained" color="inherit" onClick={() => setEditCustomer(null)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onClose={closeDeleteDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this customer?</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleDeleteCustomer}>
            Yes, Delete
          </Button>
          <Button variant="outlined" onClick={closeDeleteDialog}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={4000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home;
