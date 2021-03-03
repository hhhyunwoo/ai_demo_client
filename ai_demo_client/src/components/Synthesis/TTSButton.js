import React from "react";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const TTSButton = () => {
  return (
    <div>
      <Button type="primary" icon={<SearchOutlined />}>
        Speak It
      </Button>
    </div>
  );
};

export default TTSButton;
