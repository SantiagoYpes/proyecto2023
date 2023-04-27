import { useState, createContext, useContext } from "react";



export const contextTeacher = createContext()
export const useTeacher = () => {
    const context = useContext(contextTeacher)
    return context
}

export const TeacherProvider =  ({children}) => {
    const [teacher, setTeacher] = useState()
    const [active, setActive] = useState()
    const [contract, setContract] = useState()
    return <contextTeacher.Provider value = {{
        teacher,
        setTeacher,
        active,
        setActive,
        contract,
        setContract
    }}>
        {children}
    </contextTeacher.Provider>
}