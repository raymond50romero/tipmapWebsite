import React from "react";
import { Button, Typography, Space } from "antd";

const { Text } = Typography;

const RestaurantPopup = ({ name, address, onLeaveReview, onSeeReviews }) => {
  return (
    <div style={{ padding: "8px", maxWidth: "200px" }}>
      <Space direction="vertical" size="small" style={{ width: "100%" }}>
        <Text strong style={{ fontSize: "16px" }}>
          {name}
        </Text>
        {address && <Text type="secondary">{address}</Text>}
        <Button type="primary" block onClick={onLeaveReview}>
          Leave a Review
        </Button>
        <Button block onClick={onSeeReviews}>
          See Reviews
        </Button>
      </Space>
    </div>
  );
};

export default RestaurantPopup;
