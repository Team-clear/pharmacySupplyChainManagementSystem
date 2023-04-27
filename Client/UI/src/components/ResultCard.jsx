import React from 'react'

import { Card, Image, Text, Badge, Button, Group, Avatar } from '@mantine/core';

const ResultCard = () => {
    return (
        <div>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                        height={160}
                        alt="Norway"
                    />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>A very long Drug Name like panadol</Text>
                    <Badge color="green" variant="light">
                        In Stock
                    </Badge>
                </Group>


                <Group>

                    <Text size="sm" color="dimmed">
                        by
                    </Text>
                    <Avatar src="avatar.png" alt="it's me" />
                    <Text size="sm" color="dimmed">
                        Mbunji mo Pharmaceuticals
                    </Text>

                </Group>



                <Button variant="light" color="green" fullWidth mt="md" radius="md">
                    View Offer
                </Button>
            </Card>
        </div>
    )
}

export default ResultCard