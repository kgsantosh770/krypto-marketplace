function button(props: any) {
  return (
    <button 
        className={`${props.className} px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150`}
        type="button"
    >
        {props.children}
    </button>
  )
}

export default button