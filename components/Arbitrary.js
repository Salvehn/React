import React, {useEffect, useState} from 'react'
const Arbitrary = (props) => {
    const [state,setState] = useState({module:null})
    useEffect(()=>{
        const { path } = props;
        console.log(path)
        import(`${path}`).then(module => setState({ module: module.default }));
    },[])
    const { module: Component } = state;
    return <div>{Component && <Component {...props}/>}</div>;
}
export default Arbitrary
