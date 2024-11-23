export default function Loading() {
    return (
        <div className='flex space-x-2 justify-center items-center w-fit'>
            <div className='h-8 w-8 bg-violet-600/80 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-8 w-8 bg-violet-700/80 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-8 w-8 bg-violet-800/80 rounded-full animate-bounce'></div>
        </div>
    )
}