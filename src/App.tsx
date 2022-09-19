import './styles/main.css';
import logoImg from './assets/logo.svg';
import { GamerBanner } from './components/GameBanner';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { GamesProps } from './GamesProps';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from './components/CreateAdModal';

export const App = () => {
  const [games, setGames] = useState<GamesProps[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/games');
        setGames(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          alert(error.message);
        }
      }
    };

    loadData();
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-5">
      <img src={logoImg} alt="logoImg" />
      <h1 className="text-6xl text-white font-black mt-5">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-10">
        {games.map((game) => (
          <GamerBanner key={game.id} title={game.title} bannerUrl={game.bannerUrl} adsCounter={game._count.ads} />
        ))}
      </div>

      <Dialog.Root>
        <Footer />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
};
