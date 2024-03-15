import React, { useState } from 'react';
import { Text, Avatar, Group, Button } from '@mantine/core';
import Modal from '../LandingPage/M/Modal'; // Assuming Modal is already a TypeScript component or has its types defined
import NewsCard from './NewsCard';

// Define the type for a news item
type NewsItem = {
    id: number;
    title: string;
    description: string;
    image: string;
    button:string;
};

function NewsSection2() {
    // Mock data for news items
    const [newsItems, setNewsItems] = useState<NewsItem[]>([
        {
            id: 1,
            title: 'PlasmaVerse News Highlights',
            description: 'Stay updated with the latest news and developments from the PlasmaVerse developments.',
            image: '/plasma_world_news_image.png',
            button: 'Read Articels'
            
        },
        {
            id: 2,
            title: 'Upcoming Launches',
            description: 'Watch out and don`t miss the upcoming Launch',
            image: '/NftRocket.png',
            button: 'Check it out'

        },
        {
            id: 3,
            title: 'List & Launch with us',
            description: 'Everything in one Place,Contact us for more Information.',
            image: '/ContactUs.png',
            button: 'Contact us'

        },
    ]);

    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    // State to manage which news item is selected for viewing in the modal
    const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null);

    // Function to open the modal and set the selected news item
    const openModal = (newsItem: NewsItem) => {
        setSelectedNewsItem(newsItem);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='max-w-7xl mx-auto mt-36'>
            <div>
                <h2 className='text-sky-500 text-2xl font-semibold text-center pt-20 pb-10'>Latest News</h2>
                <div className="flex gap-10 overflow-x-auto">
                    {newsItems.map((newsItem) => (
                        <div key={newsItem.id} style={{ flex: '1 0 0', minWidth: '300px', maxWidth: '400px' }}>
                            <NewsCard
                                newsItem={newsItem}
                                onViewArticle={() => openModal(newsItem)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selectedNewsItem && (
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div>
                        <Group>
                            <Avatar
                                src={selectedNewsItem.image}
                                alt={selectedNewsItem.title}
                                radius="xl"
                            />
                            <div>
                                <Text size="sm">{selectedNewsItem.title}</Text>
                                <Text size="xs" color="dimmed">
                                    {new Date().toLocaleDateString()}
                                </Text>
                            </div>
                        </Group>
                        <Text pl={54} pt="sm" size="sm">
                            {selectedNewsItem.description}
                        </Text>
                        <Button
                            className="mt-4"
                            variant="outline"
                            color="blue"
                            onClick={closeModal}
                        >
                            Close
                        </Button>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default NewsSection2;
