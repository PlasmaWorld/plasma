import React from 'react';
import { Card, Image, Text, Button } from '@mantine/core';

// Define the type for the news item prop
type NewsItem = {
    image: string;
    title: string;
    description: string;
    button: string;
};

// Define the props for the NewsCard component
interface NewsCardProps {
    newsItem: NewsItem;
    onViewArticle: (item: NewsItem) => void;
}

function NewsCard({ newsItem, onViewArticle }: NewsCardProps) {
    return (
        <Card shadow="md" className="rounded-lg overflow-hidden h-full">
            <Image
                src={newsItem.image}
                alt={newsItem.title}
                height={200}
                fit="cover"
                className="object-cover w-full h-48"
            />
            <div className="p-4 h-48 flex flex-col justify-between">
                <div>
                    <Text size="lg" weight={700} mt={0} mb={2}>
                        {newsItem.title}
                    </Text>
                    <Text size="sm" mt={0} mb={4}>
                        {newsItem.description}
                    </Text>
                </div>
                <Button
                    variant="outline"
                    color="blue"
                    onClick={() => onViewArticle(newsItem)}
                    className="w-full"
                >
                    {newsItem.button}
                </Button>
            </div>
        </Card>
    );
}

export default NewsCard;
