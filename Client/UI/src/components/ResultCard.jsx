import React from 'react'

import { Card, Image, Text, Badge, Button, Group, Avatar } from '@mantine/core';
import { useNavigate } from 'react-router';

const ResultCard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                        src="https://cdn01.pharmeasy.in/dam/products_otc/N48555/pharmeasy-vitamin-e-helps-reverse-skin-ageing-maintains-heart-eye-brain-health-bottle-of-60-2-1671743059.jpg"
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



                <Button variant="light" color="green" fullWidth mt="md" radius="md"
                onClick={() => navigate(`/productdetails`) }
                >
                    View Offer
                </Button>
            </Card>
        </div>
    )
}

export default ResultCard