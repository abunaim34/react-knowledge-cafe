import PropTypes from 'prop-types';
import { MdOutlineBookmarks } from "react-icons/md";

const Blog = ({blog, hanndleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags} = blog
    return (
        <div className='mb-20 mt-8 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div  className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p className="">{posted_date}</p>
                    </div>
                </div>
                <div  className=' flex items-center '>
                    <span>{reading_time} min read</span>
                    <button onClick={() => hanndleAddToBookmark(blog)} className='ml-2 text-2xl'><MdOutlineBookmarks /></button>
                </div>
            </div>
            <h2 className="text-4xl my-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''> #{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time, id)} className='btn text-purple-800 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    hanndleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;