import { useState, createContext, useContext } from "react";

const contextTeachers = createContext()
export const useTeachers = () => {
    const context = useContext(contextTeachers)
    return context
}
export const TeacherProvider =  ({children}) => {
    console.log('Container console')
    const [teachers, setTeachers] = useState([])
    console.log(teachers)
    return <contextTeachers.Provider value={{
        teachers,
        setTeachers,

    }}>
        {children}
    </contextTeachers.Provider>
}