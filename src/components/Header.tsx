import { useEffect, useState } from 'react';


interface HeaderProps {
    selectedGenre:{
        id: number;
        name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
        title: string;
    }
}

export function Header(props:HeaderProps) {

  //const [movies, setMovies] = useState<MovieProps[]>([]);
 
  return(
    <header>
          <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
    </header>
  )
}