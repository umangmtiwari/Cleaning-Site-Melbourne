import React, { useMemo, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "./cleanlogo.png"; // ✅ Import logo

// Empty line item
const emptyItem = () => ({ id: crypto.randomUUID(), name: "", description: "", qty: 1, price: 0 });

// ✅ Currency formatter set to USD
const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export default function Billing() {
  const [personal, setPersonal] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const [items, setItems] = useState([emptyItem()]);
  const [taxRate, setTaxRate] = useState(18);
  const [discount, setDiscount] = useState(0);
  const [notes, setNotes] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const previewRef = useRef(null);

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, it) => sum + (Number(it.qty) || 0) * (Number(it.price) || 0),
      0
    );
    const tax = subtotal * (Number(taxRate) / 100);
    const total = Math.max(subtotal + tax - Number(discount || 0), 0);
    return { subtotal, tax, total };
  }, [items, taxRate, discount]);

  const updatePersonal = (field, value) =>
    setPersonal((p) => ({ ...p, [field]: value }));

  const updateItem = (id, field, value) =>
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, [field]: value } : it))
    );

  const addItem = () => setItems((prev) => [...prev, emptyItem()]);
  const removeItem = (id) =>
    setItems((prev) =>
      prev.length > 1 ? prev.filter((it) => it.id !== id) : prev
    );

  const validate = () => {
    const errors = [];
    if (!personal.fullName.trim()) errors.push("Full Name is required");
    if (!personal.email.trim()) errors.push("Email Address is required");
    if (!personal.phone.trim()) errors.push("Phone Number is required");
    const hasValidItem = items.some(
      (it) => it.name.trim() && Number(it.qty) > 0 && Number(it.price) >= 0
    );
    if (!hasValidItem) errors.push("Add at least one valid line item");
    return errors;
  };

  const handleGenerate = () => {
    const errs = validate();
    if (errs.length) {
      alert(
        "Please fix the following before preview:\n\n" +
          errs.map((e) => `• ${e}`).join("\n")
      );
      return;
    }
    setShowPreview(true);
  };

  const downloadPDF = async () => {
    if (!previewRef.current) return;
    const node = previewRef.current;
    const canvas = await html2canvas(node, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let y = 0;
    if (imgHeight < pageHeight) {
      y = (pageHeight - imgHeight) / 2;
    }

    pdf.addImage(imgData, "PNG", 0, y, imgWidth, imgHeight);
    const filename = `Invoice_${personal.fullName || "Customer"}_${new Date()
      .toISOString()
      .slice(0, 10)}.pdf`;
    pdf.save(filename);
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 }, px: { xs: 1, md: 2 } }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">
          Billing & Invoice
        </Typography>
        <Box display="flex" gap={2} flexWrap="wrap" justifyContent="flex-end">
          <Button
            variant="outlined"
            onClick={() => {
              setPersonal({
                fullName: "",
                email: "",
                phone: "",
                street: "",
                city: "",
                state: "",
                zip: "",
              });
              setItems([emptyItem()]);
              setTaxRate(18);
              setDiscount(0);
              setNotes("");
            }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#2049A3" }}
            onClick={handleGenerate}
          >
            Generate Bill
          </Button>
        </Box>
      </Box>

      {/* Forms */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="Personal Details" />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={personal.fullName}
                    onChange={(e) => updatePersonal("fullName", e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email Address"
                    value={personal.email}
                    onChange={(e) => updatePersonal("email", e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="tel"
                    label="Phone Number"
                    value={personal.phone}
                    onChange={(e) => updatePersonal("phone", e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Street"
                    value={personal.street}
                    onChange={(e) => updatePersonal("street", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="City"
                    value={personal.city}
                    onChange={(e) => updatePersonal("city", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="State"
                    value={personal.state}
                    onChange={(e) => updatePersonal("state", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Zip Code"
                    value={personal.zip}
                    onChange={(e) => updatePersonal("zip", e.target.value)}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Items */}
          <Box mt={3}>
            <Card>
              <CardHeader title="Billing Items" />
              <CardContent>
                <Box sx={{ overflowX: "auto" }}>
  <Table size="small" sx={{ minWidth: 650 }}>
    <TableHead>
      <TableRow>
        <TableCell>Item</TableCell>
        <TableCell>Description</TableCell>
        <TableCell align="right">Qty</TableCell>
        <TableCell align="right">Price</TableCell>
        <TableCell align="right">Amount</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {items.map((it) => {
        const amount =
          (Number(it.qty) || 0) * (Number(it.price) || 0);
        return (
          <TableRow key={it.id}>
            <TableCell>
              <TextField
                fullWidth
                size="small"
                placeholder="Item name"
                value={it.name}
                onChange={(e) =>
                  updateItem(it.id, "name", e.target.value)
                }
              />
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                size="small"
                placeholder="Description"
                value={it.description}
                onChange={(e) =>
                  updateItem(it.id, "description", e.target.value)
                }
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                size="small"
                type="number"
                value={it.qty}
                onChange={(e) =>
                  updateItem(it.id, "qty", e.target.value)
                }
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                size="small"
                type="number"
                value={it.price}
                onChange={(e) =>
                  updateItem(it.id, "price", e.target.value)
                }
              />
            </TableCell>
            <TableCell align="right">
              {currency.format(amount)}
            </TableCell>
            <TableCell align="right">
              <IconButton onClick={() => removeItem(it.id)}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
</Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  flexWrap="wrap"
                  mt={2}
                  gap={2}
                >
                  <Button variant="outlined" onClick={addItem}>
                    + Add Item
                  </Button>
                  <Box display="flex" gap={2} flexWrap="wrap">
                    <TextField
                      type="number"
                      label="Tax %"
                      size="small"
                      value={taxRate}
                      onChange={(e) => setTaxRate(e.target.value)}
                    />
                    <TextField
                      type="number"
                      label="Discount"
                      size="small"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Notes */}
          <Box mt={3}>
            <Card>
              <CardHeader title="Notes" />
              <CardContent>
                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  placeholder="Additional notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* Summary */}
        <Grid item xs={12} md={12} lg={4}>
          <Card>
            <CardHeader title="Summary" />
            <CardContent>
              <Typography variant="body2">
                Subtotal: {currency.format(totals.subtotal)}
              </Typography>
              <Typography variant="body2">
                Tax ({Number(taxRate)}%): {currency.format(totals.tax)}
              </Typography>
              {Number(discount) > 0 && (
                <Typography variant="body2">
                  Discount: -{currency.format(discount)}
                </Typography>
              )}
              <Typography variant="h6" mt={2}>
                Total: {currency.format(totals.total)}
              </Typography>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2, bgcolor: "#2049A3" }}
                onClick={handleGenerate}
              >
                Preview & Download
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Preview */}
      <Dialog open={showPreview} onClose={() => setShowPreview(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          Invoice Preview
          <IconButton
            onClick={() => setShowPreview(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box ref={previewRef} p={3}>
            {/* Header with logo and company info */}
            <Box
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  flexWrap="wrap"
  mb={2}
  px={2}
  py={2}
  sx={{ backgroundColor: "#2049A3", color: "white", borderRadius: 1 }}
>

  <Box>
    <img src={Logo} alt="Company Logo" style={{ height: 60, backgroundColor: "transparent" }} />
  </Box>
  <Box textAlign={{ xs: "left", sm: "right" }} mt={{ xs: 2, sm: 0 }}>
    <Typography variant="h6" fontWeight="bold">
      Clean Commerce
    </Typography>
    <Typography variant="body2">ABN: 95279464367</Typography>
    <Typography variant="body2">
      Melbourne Victoria 3000, Australia
    </Typography>
  </Box>
</Box>


            {/* Divider accent */}
            <Box height={4} bgcolor="#2049A3" borderRadius={1} mb={2} />

            <Typography variant="h4" gutterBottom>
              INVOICE
            </Typography>
            <Typography variant="subtitle2">
              Date: {new Date().toLocaleDateString()}
            </Typography>

            {/* Customer vs Company address */}
<Box display="flex" justifyContent="space-between" flexWrap="wrap" mt={2} gap={2} alignItems="center">
  <Box flex="1 1 300px" minWidth="250px" mr={2}>
    <Typography variant="subtitle2">Billed To:</Typography>
    <Typography>{personal.fullName}</Typography>
    <Typography>{personal.email}</Typography>
    <Typography>{personal.phone}</Typography>
    <Typography>
      {[personal.street, personal.city, personal.state, personal.zip]
        .filter(Boolean)
        .join(", ")}
    </Typography>
  </Box>
  <Box flex="1 1 300px" minWidth="250px" textAlign={{ xs: "left", sm: "right" }}>
    <Typography variant="subtitle2">From:</Typography>
    <Typography>Clean Commerce</Typography>
    <Typography>ABN: 95279464367</Typography>
    <Typography>
      Melbourne Victoria 3000, Australia
    </Typography>
  </Box>
</Box>

            {/* Items table */}
            <Table size="small" sx={{ mt: 2 }}>
              <TableHead sx={{ bgcolor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell align="right">Qty</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((it) => (
                  <TableRow key={it.id}>
                    <TableCell>{it.name}</TableCell>
                    <TableCell>{it.description}</TableCell>
                    <TableCell align="right">{it.qty}</TableCell>
                    <TableCell align="right">
                      {currency.format(it.price)}
                    </TableCell>
                    <TableCell align="right">
                      {currency.format((it.qty || 0) * (it.price || 0))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Totals */}
            <Box mt={2} textAlign="right">
              <Typography>Subtotal: {currency.format(totals.subtotal)}</Typography>
              <Typography>
                Tax ({Number(taxRate)}%): {currency.format(totals.tax)}
              </Typography>
              {Number(discount) > 0 && (
                <Typography>Discount: -{currency.format(discount)}</Typography>
              )}
              <Typography variant="h6">
                Total: {currency.format(totals.total)}
              </Typography>
            </Box>

            {/* Notes */}
            {notes && (
              <Box mt={2}>
                <Typography variant="subtitle2">Notes:</Typography>
                <Typography>{notes}</Typography>
              </Box>
            )}

            {/* Footer accent */}
            <Box height={4} bgcolor="#2049A3" borderRadius={1} mt={4} />
          </Box>
        </DialogContent>
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button
            variant="contained"
            sx={{ bgcolor: "#2049A3" }}
            onClick={downloadPDF}
          >
            Download PDF
          </Button>
        </Box>
      </Dialog>
    </Container>
  );
}
