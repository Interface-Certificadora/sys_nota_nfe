'use client'
import { Flex } from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import CardVideos from '@/components/cards/videos_card';
import ContatoSup from '@/components/cards/contato_sup';

const MotionFlex = motion(Flex);

    const testeVideos = [{ 
        "src" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ,
        "title" : "Big Buck Bunny"
      },
      { 
        "src" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" ,
        "title" : "Elephant Dream"
      },
      { 
        "src" :  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" ,
        "title" : "For Bigger Blazes"
      },
      { 
        "src" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" ,
        "title" : "For Bigger Escape"
      },
      { 
        "src" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" ,
        "title" : "For Bigger Fun"
      },
      { 
        "src" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" ,
        "title" : "For Bigger Joyrides"
      },
      { 
        "src" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" ,
        "title" : "For Bigger Meltdowns"
      },
      { 
        "src" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" ,
        "title" : "Sintel"
      },
      { 
        "src" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" ,
        "title" : "Subaru Outback On Street And Dirt"
      },
      { 
        "src" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" ,
        "title" : "Tears of Steel"
      },
      { 
        "src" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" ,

        "title" : "Volkswagen GTI Review"
      },
      { 
        "src" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" ,

        "title" : "We Are Going On Bullrun"
      },
      { 
        "src" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" ,
        "title" : "What care can you get for a grand?"
      }
]

export default function Page() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const isBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 1;
      setIsAtBottom(isBottom);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
      <Flex
        ref={scrollContainerRef}
        w="100%"
        h="100%"
        overflowY="auto"
        flexDirection={{ base: 'column', md: 'row' }}
        flexWrap={{ base: 'nowrap', md: 'wrap' }}
        alignItems={'center'}
      >
        {testeVideos.map((video, index) => (
          <CardVideos key={index} src={video.src} title={video.title} />
        ))}
        <MotionFlex
        justifyContent="center"
        mb={4}
        w={"100%"}
        h="10%"
        initial={{ y: 100, opacity: 0 }}
        animate={isAtBottom ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <ContatoSup w="40%" h="100%"  />
      </MotionFlex>
      </Flex>
  );
}