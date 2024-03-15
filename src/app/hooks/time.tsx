type Props = {
    time: Date
  }
  const Time = ({ time }: Props) => {
    return (
      <span>
        {time.toLocaleTimeString(undefined, {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })}
      </span>
    )
  }
  
  export default Time