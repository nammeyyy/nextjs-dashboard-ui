import { FaUsers, FaRegNewspaper } from 'react-icons/fa6'

function Content() {
  return (
    <div className='px-10 rounded-lg'>
        <div className='flex'>
            <div className='shadow-lg w-[300px] m-3 p-10 rounded-lg'>
                <h3 className='flex items-center'><FaUsers className='mr-2' /> Total Users</h3>
                <p className='text-5xl mt-10'>29</p>
            </div>
            <div className='shadow-lg w-[300px] m-3 p-10 rounded-lg'>
                <h3 className='flex items-center'><FaRegNewspaper className='mr-2' /> Total Posts</h3>
                <p className='text-5xl mt-10'>59</p>
            </div>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium sit cupiditate rem. Quae in aut vitae enim magni debitis, facilis ipsam porro corporis tenetur maxime eveniet iusto maiores provident.
        </p>
    </div>
  )
}
export default Content