// JSX component
const container1 = {
  display:"flex",
  justifyContent:"space-between",
  fontFamily:"Montserrat",
  fontWeight:300,
  fontSize:"23px",
  lineHeight:"60px",
  boxShadow:"0 0 8px #eee",
  padding:"0 15px"
}


const container2 = {
  display:"flex",
  justifyContent:"space-between",
  fontFamily:"Montserrat",
  fontWeight:300,
  fontSize:"23px",
}

const imgStyle = {
  width:"40px",
  height:"40px",
  borderRadius:"50%",
}
const imgDiv = {
  height:"40px",
  margin:"auto 20px auto 20px",
  borderRadius:"50%",
  cursor:"pointer"
}

const Header = (props) => {
  const obj = props.obj;
  return (
        <div style={container1}>
          <div>{obj.logo}</div>
          <div style={container2} >
            <div>
              {obj.name}
            </div>
            <div style={imgDiv}>
              <img src={obj.img} alt="A cat image" style={imgStyle}/>
            </div>
          </div>
        </div>
    )
}

export default Header;