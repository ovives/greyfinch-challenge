import React from 'react';
import { AnimalsTag } from '../../domain/types';
import './AnimalsSelector.css';

const ANIMALS = ['cats', 'dogs', 'elephants', 'lions', 'monkeys'];

interface IAnimalsSelectorProps {
  selected: AnimalsTag;
  onClick: (animal: AnimalsTag) => void;
};

const AnimalsSelector = ({ selected, onClick }: IAnimalsSelectorProps): JSX.Element => (
  <div className='Animals-selector-container'>
    {ANIMALS.map(animal =>
      <div
        className={animal === selected ? 'selected' : 'not-selected'}
        key={animal}
        onClick={() => onClick(animal as AnimalsTag)}
      >
        {animal}
      </div>
    )}
  </div>
);

export default AnimalsSelector;
