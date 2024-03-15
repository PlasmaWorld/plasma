import React from 'react';
import { Card, Image, Text } from '@mantine/core';

// Define the props interface
interface CustomCardProps {
  name: string;
  description: string;
  image: string;
  link: string; // Assuming link might be used for navigation or as a part of Image or Text components in the future
}

const CustomCard: React.FC<CustomCardProps> = ({ name, description, image, link }) => {
    return (
        <Card shadow="md" className="rounded-xl overflow-hidden bg-white border border-sky-500 hover:shadow-lg transition duration-300">
            <Image src={image} alt={name} className="w-full h-auto" />
            <div className="p-5">
                <Text size="lg" weight={700} mb={2}>
                    {name}
                </Text>
                <Text size="sm" color="gray">
                    {description}
                </Text>
            </div>
        </Card>
    );
}

export default CustomCard;
