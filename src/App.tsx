import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { CreateModal } from './components/create-modal/create-modal';
// import { ProductData } from './interface/ProductData';
import { useProductData } from './hooks/useProductData';


function App() {
  const { data } = useProductData();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
  
    <div className="container">
      <h1>Produtos</h1>
      <div className='card-grid'>
        {data?.map(productData => 
          <Card 
            id={productData.id!}
            name={productData.name}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div> 
  )
}

export default App