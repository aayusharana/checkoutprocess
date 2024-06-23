import React, { useState } from 'react';
import { Button, Form, Input, Space } from 'antd';
import Pay from '../components/Pay';

const Checkoutpros = () => {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);

  const handleProceedToPayment = () => {
    console.log('Proceed to Payment clicked');
    form
      .validateFields()
      .then((values) => {
        console.log('Form is valid, proceeding to payment with values:', values);
        setSubmitted(true); // Set submitted to true to render payment section
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
        // Handle validation errors if needed
      });
  };

  const handleBackToCart = () => {
    console.log('Back to Cart clicked');
    // Implement your back to cart logic here
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {!submitted ? (
        <Form
          form={form}
          name="checkoutForm"
          layout="vertical"
          autoComplete="off"
          className="space-y-4"
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: 'Please enter your full name',
              },
            ]}
            className="w-full"
          >
            <Input className="input-medium" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: 'Please enter your address',
              },
            ]}
            className="w-full"
          >
            <Input className="input-medium" />
          </Form.Item>
          <Form.Item
            name="city"
            label="City"
            rules={[
              {
                required: true,
                message: 'Please enter your city',
              },
            ]}
            className="w-full"
          >
            <Input className="input-medium" />
          </Form.Item>
          <Form.Item
            name="state"
            label="State/Province"
            rules={[
              {
                required: true,
                message: 'Please enter your state/province',
              },
            ]}
            className="w-full"
          >
            <Input className="input-medium" />
          </Form.Item>
          <Form.Item
            name="zipCode"
            label="Zip Code"
            rules={[
              {
                required: true,
                message: 'Please enter your zip code',
              },
            ]}
            className="w-full"
          >
            <Input className="input-medium" />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            rules={[
              {
                required: true,
                message: 'Please enter your country',
              },
            ]}
            className="w-full"
          >
            <Input className="input-medium" />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please enter your phone number',
              },
            ]}
            className="w-full"
          >
            <Input className="input-medium" />
          </Form.Item>
          <Form.Item className="w-full">
            <Space className="flex justify-between w-full">
              <Button
                onClick={handleBackToCart}
                htmlType="button"
                className="bg-gray-300 text-gray-700 p-2 rounded"
              >
                Back to Cart
              </Button>
              <Button
                type="primary"
                onClick={handleProceedToPayment}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Proceed to Payment
              </Button>
            </Space>
          </Form.Item>
        </Form>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold"><Pay/></h2>
        </div>
      )}
    </div>
  );
};

export default Checkoutpros;
