import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt='' fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <label>Title</label>
          <input type='text' name='username' placeholder='John Doe' />
          <label htmlFor=''>Price</label>
          <input type='number' name='price' placeholder='johnDoe@Gmail.com' />
          <label htmlFor=''>Stock</label>
          <input type='number' name='stock' placeholder='23' />
          <label htmlFor=''>Color</label>
          <input type='text' name='color' placeholder='red' />
          <label htmlFor=''>Size</label>
          <textarea name='size' placeholder='New York' />
          <label>Cat</label>
          <select name='cat' id='cat'>
            <option value={true}>Kitchen</option>
            <option value={false}>Computers</option>
          </select>
          <label htmlFor=''>Description</label>
          <textarea name='desc' id='desc' rows='10' placeholder='description' />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
