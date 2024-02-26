'use client';

import { Home } from 'lucide-react';
import Link from 'next/link';
import styles from '../../styles/Button.module.css';
import { ScrollText } from 'lucide-react';
import { FilePlus } from 'lucide-react';
import { FilePlus2 } from 'lucide-react';
export function Navigation() {
  return (
    <nav className="flex items-center justify-center gap-4 flex-wrap max-w-6xl w-full mx-auto">
      <Link href="/" className={`flex items-center gap-1 ${styles.button} `}>
        <Home className='w-4 h-4' />
        Tela inicial
        <span className={styles.tooltip}>
          Ir para tela inicial da aplicação
        </span>
      </Link>

      <div className="flex items-center justify-center gap-4">
        <Link href="/proposta/existentes" style={{ backgroundColor: '#383838' }} className={`flex items-center gap-3 ${styles.button} `}>
        <ScrollText />
          Lista de Propostas Existentes
          <span className={styles.tooltip}>
            Ação para vizualizar suas propostas existentes dentro do sistema
          </span>
        </Link>
        <Link href="/proposta/nova" style={{ backgroundColor: 'green' }} className={`flex items-center gap-3 ${styles.button} `}>
        <FilePlus />
          Proposta Nova
          <span className={styles.tooltip}>
            Ação de criação de uma proposta nova
          </span>
        </Link>
      </div>

      <div className="flex items-center justify-center gap-4">
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
      </div>
    </nav>
  );
}