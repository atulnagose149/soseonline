import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  Avatar,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";

// Dummy data for subscriptions and billing
const subscriptions = [
  {
    planName: "Pro Plan",
    price: "$29/month",
    renewalDate: "October 30, 2024",
  },
  {
    planName: "Basic Plan",
    price: "$10/month",
    renewalDate: "October 15, 2024",
  },
];

// Dummy invoice history
const invoices = [
  {
    invoiceId: "INV-12345",
    date: "September 15, 2024",
    amount: "$29",
    status: "Paid",
  },
  {
    invoiceId: "INV-12346",
    date: "August 15, 2024",
    amount: "$29",
    status: "Paid",
  },
  {
    invoiceId: "INV-12347",
    date: "July 15, 2024",
    amount: "$29",
    status: "Paid",
  },
];

// Dummy payment methods
const paymentMethods = [
  {
    type: "Credit Card",
    lastFourDigits: "4242",
    expiryDate: "12/25",
    cardHolder: "John Doe",
  },
];

const BillingPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddPaymentMethod = (e) => {
    e.preventDefault();
    // Add logic to update payment method
    alert("Payment method added successfully!");
    setFormData({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardHolder: "",
    });
  };

  return (
    <Container sx={{ mt: 5 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" gutterBottom>
          Manage Your Billing
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Review your billing details, manage subscriptions, and update your
          payment methods.
        </Typography>
      </Box>

      {/* Active Subscriptions */}
      <Typography variant="h4" gutterBottom>
        Active Subscriptions
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        {subscriptions.map((subscription, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{subscription.planName}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {subscription.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Renewal Date: {subscription.renewalDate}
                  </Typography>
                  <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                    Manage Plan
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Billing Overview */}
      <Typography variant="h4" gutterBottom>
        Billing Overview
      </Typography>
      <Card sx={{ p: 4, mb: 5 }}>
        <Typography variant="body1">
          **Total Due:** No outstanding payments.
        </Typography>
        <Typography variant="body1">
          **Next Payment Date:** {subscriptions[0].renewalDate}
        </Typography>
      </Card>

      {/* Payment Methods */}
      <Typography variant="h4" gutterBottom>
        Payment Methods
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        {paymentMethods.map((method, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{method.type}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Card ending in {method.lastFourDigits}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Expires on {method.expiryDate}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cardholder: {method.cardHolder}
                  </Typography>
                  <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                    Update Payment Method
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Add Payment Method */}
      <Typography variant="h4" gutterBottom>
        Add New Payment Method
      </Typography>
      <Card sx={{ p: 4, mb: 5 }}>
        <form onSubmit={handleAddPaymentMethod}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Card Number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Expiry Date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="CVV"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Cardholder Name"
                name="cardHolder"
                value={formData.cardHolder}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
              >
                Add Payment Method
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>

      {/* Invoice History */}
      <Typography variant="h4" gutterBottom>
        Invoice History
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        {invoices.map((invoice, index) => (
          <Grid item key={index} xs={12}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    Invoice ID: {invoice.invoiceId}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date: {invoice.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Amount: {invoice.amount}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Status: {invoice.status}
                  </Typography>
                  <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                    Download Invoice
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* FAQ Section */}
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Typography variant="body1" gutterBottom>
          **How can I update my payment method?** You can update your payment
          method by clicking on "Update Payment Method" under the current
          payment method section.
        </Typography>
        <Typography variant="body1" gutterBottom>
          **Where can I find my past invoices?** Your past invoices are listed
          in the "Invoice History" section. You can download them as needed.
        </Typography>
        <Typography variant="body1" gutterBottom>
          **When will my next payment be processed?** You can find the next
          payment date in the "Billing Overview" section.
        </Typography>
      </Box>
    </Container>
  );
};

export default BillingPage;
