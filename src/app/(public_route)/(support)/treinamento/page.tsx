'use client'
import { Flex } from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import CardVideos from '@/app/components/cards/videos_card';
import ContatoSup from '@/app/components/cards/contato_sup';

const MotionFlex = motion(Flex);

type VideosProps = {
  id: number;
  titulo: string;
  url: string;
};


export default function Page() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    (async() =>{
      const req = await fetch(`/api/videos/`)
      const res = await req.json()
      console.log("🚀 ~ res:", res)
      if (req.ok){
        setVideos(res)
      }
    })()
  }, []);

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
        gap={{ base: 4, md: 8 }}
        flexWrap={{ base: 'nowrap', md: 'wrap' }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {Videos.map((v: VideosProps) => (
          <CardVideos key={v.id} src={v.url} title={v.titulo} />
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