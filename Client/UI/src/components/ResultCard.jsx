import React from "react";

import { Card, Image, Text, Badge, Button, Group, Avatar } from "@mantine/core";
import { useNavigate } from "react-router";

const ResultCard = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={props.url} height={200} width={200} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{props.Title}</Text>
          <Badge color="green" variant="light">
            In Stock
          </Badge>
        </Group>
        <Group>
          <Text>3000Tsh/pc</Text>
        </Group>
        <Group>
          <Text size="sm" color="dimmed">
            By
          </Text>
          <Avatar src="avatar.png" alt="it's me" />
          <Text size="sm" color="dimmed">
            {props.pharmacy}
          </Text>
        </Group>

        <Button
          variant="light"
          color="green"
          fullWidth
          mt="md"
          radius="md"
          onClick={() =>
            navigate(`/productdetails`, { state: { id: `${props.id}` } })
          }
        >
          View Offer
        </Button>
      </Card>
    </div>
  );
};

export default ResultCard;
