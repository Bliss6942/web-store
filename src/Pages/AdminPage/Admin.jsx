import { useDispatch, useSelector } from 'react-redux'
import {  addtoData } from '../../slices/adminSlice'
import s from './Admin.module.css'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'



const Admin = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const store = useSelector((store) => store.adminSlice)

  const dispatch = useDispatch()

  

  const [title,setTitle] = useState('')
  const [price,setPrice] = useState('')
  const [description,setDescription] = useState('')
  const [image,setImage] = useState('')

  const handleTitile = (e) => {
    setTitle(e.target.value)
}
  const handlePrice = (e) => {
    setPrice(e.target.value)
}
  const handleDescription = (e) => {
    setDescription(e.target.value)
}
  const handleImage = (e) => {
    setImage(e.target.value)
}


  
    const add = (image,price,description,title) => {
      dispatch(addtoData({image,price,description,title}))
    }
    
  




  return (
    <>
        <div className={s.title}>
            <h1>Вы вошли как админ</h1>
        </div>

        <div className={s.main}>
            <div className={s.tovars_wrapper}>
                <div className={s.title2}>
                  <h1>Новые товары</h1>
                </div>
                <div className={s.tovars_block}>
                {store.data.map((item, index) => 
                    <div className={s.itemm} key={index}>
                        <h2>{item.title}</h2>
                    </div>
                )}
                </div>
                
                <Button onClick={onOpen}>Добавить товар</Button>

                <Modal
        isOpen={isOpen}
        onClose={onClose}
      >

                    <ModalOverlay />
        <ModalContent>
          <ModalHeader>Добавить товар</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>


            <FormControl>
              <FormLabel>Название</FormLabel>
              <Input  placeholder='Дайте название' value={title} onChange={handleTitile}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Цена</FormLabel>
              <Input placeholder='Укжите цену' value={price} onChange={handlePrice}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Описание товара</FormLabel>
              <Input placeholder='Напишите описание' value={description} onChange={handleDescription}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Изображение</FormLabel>
              <Input placeholder='Вставьте ссылку ' value={image} onChange={handleImage}/>
            </FormControl>


          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => add(image,price,description,title)}>
              Добавить товар
            </Button>
            <Button onClick={onClose}>Закрыть</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

            </div>
        </div>
    </>
  )
}

export default Admin