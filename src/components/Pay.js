import React, { useState } from 'react';
import { Button, Form, Input, Space } from 'antd';
import Review from '../pages/Review';
import { Link } from 'react-router-dom';

const Pay = () => {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);

  const handleBackToShipping = () => {
    console.log('Back to Shipping clicked');
    
  };

  const handleReviewOrder = () => {
    console.log('Review Order clicked');
    form
      .validateFields()
      .then((values) => {
        console.log('Form is valid, reviewing order with values:', values);
       
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
        
      });
  };

  return (
    
    <div className="p-4 max-w-4xl mx-auto">
      <Form
        form={form}
        name="paymentForm"
        layout="vertical"
        autoComplete="off"
        className="space-y-4"
      >
        <Form.Item
          name="cardholderName"
          label="Cardholder Name"
          rules={[
            {
              required: true,
              message: 'Please enter the cardholder name',
            },
          ]}
          className="w-full"
        >
          <Input className="border border-gray-300 rounded p-2 w-full" />
        </Form.Item>
        <Form.Item
          name="cardNumber"
          label="Card Number"
          rules={[
            {
              required: true,
              message: 'Please enter your card number',
            },
            {
              pattern: /^[0-9]{16}$/,
              message: 'Card number must be 16 digits',
            },
          ]}
          className="w-full"
        >
          <Input className="border border-gray-300 rounded p-2 w-full" />
        </Form.Item>
        <Form.Item
          name="expirationDate"
          label="Expiration Date (MM/YY)"
          rules={[
            {
              required: true,
              message: 'Please enter the expiration date',
            },
            {
              pattern: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
              message: 'Expiration date must be in MM/YY format',
            },
          ]}
          className="w-full"
        >
          <Input className="border border-gray-300 rounded p-2 w-full" />
        </Form.Item>
        <Form.Item
          name="cvv"
          label="CVV"
          rules={[
            {
              required: true,
              message: 'Please enter the CVV',
            },
            {
              pattern: /^[0-9]{3,4}$/,
              message: 'CVV must be 3 or 4 digits',
            },
          ]}
          className="w-full"
        >
          <Input className="border border-gray-300 rounded p-2 w-full" />
        </Form.Item>
        <Form.Item className="w-full">
          <Space className="flex justify-between w-full">
            <Button
              onClick={handleBackToShipping}
              htmlType="button"
              className="bg-gray-300 text-gray-700 p-2 rounded"
            >
              Back to Shipping
            </Button>
        <Link to="/Review">
        <Button
              type="primary"
              onClick={handleReviewOrder}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Review Order
            </Button>
        </Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Pay;
