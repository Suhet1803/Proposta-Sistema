import Image from 'next/image';
import Link from 'next/link';
import { CurrentDate } from '../components/CurrentDate';
import styles from '../styles/Button.module.css';
import { ScrollText } from 'lucide-react';
import { FilePlus } from 'lucide-react';
import { FilePlus2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col">
      <header className='max-w-max p-4'>
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={100}
        />
      </header>

      <div className="flex items-center justify-center flex-col gap-24">
        <CurrentDate />

        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1 className='text-5xl bg-[#14134e] p-28 rounded-[50px]'>Reunião</h1>
          
          <nav className="flex flex-col items-center gap-16">
          <Link href="/proposta/nova" style={{ backgroundColor: 'green' }} className={`flex items-center gap-3 ${styles.button} `}>
          <FilePlus />
              Proposta Nova
              <span className={styles.tooltip}>
                Ação de criar uma proposta nova
              </span>
            </Link>
            <Link href="/proposta/existentes" style={{ backgroundColor: '#383838' }} className={`flex items-center gap-3 ${styles.button} `}>
            <ScrollText />
              Lista de Propostas Existentes
              <span className={styles.tooltip}>
                Ação para vizualizar suas propostas existentes dentro do sistema
              </span>
            </Link>
            <Link href="/modelo/nova" style={{ backgroundColor: 'green' }} className={`flex items-center gap-3 ${styles.button} `}>
            <FilePlus />
              Nova proposta Modelo
              <span className={styles.tooltip}>
                Criação de uma proposta com base no modelo de uma proposta existente
              </span>
            </Link>
            <Link href="/modelo/existentes" style={{ backgroundColor: '#383838' }} className={`flex items-center gap-3 ${styles.button} `}>
            <ScrollText />
              Lista de Propostas Modelo
              <span className={styles.tooltip}>
                Lista de propostas modelo existentes
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}


