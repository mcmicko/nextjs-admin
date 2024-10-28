import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';

const SingleUserPage = () => {
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
          <label>Username</label>
          <input type='text' name='username' placeholder='John Doe' />
          <label htmlFor=''>Email</label>
          <input type='email' name='email' placeholder='johnDoe@Gmail.com' />
          <label htmlFor=''>password</label>
          <input type='password' name='password' placeholder='Enter password' />
          <label htmlFor=''>Phone</label>
          <input type='text' name='phone' placeholder='+1234567' />
          <label htmlFor=''>Address</label>
          <textarea name='adress' placeholder='New York...'></textarea>
          <select name='isAdmin' id='isAdmin'>
            <option value={true}>yes</option>
            <option value={false}>no</option>
          </select>
          <select name='isActive' id='isActive'>
            <option value={false}>no</option>
            <option value={true}>yes</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
