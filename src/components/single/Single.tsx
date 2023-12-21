import './single.scss';

type Props = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}
const Single = (props:Props) => {
  return (
    <div className='single-page'>
        id: <p> {props.id} </p>
        title: <p> {props.title} </p>
        description:  <p> {props.description} </p>
        Price:  <p> {props.price} </p>
        Stock:  <p> {props.stock} </p>
        discount Percentage:  <p> {props.discountPercentage} </p>

    </div>
  )
}

export default Single