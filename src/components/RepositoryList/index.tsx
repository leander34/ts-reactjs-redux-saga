// import { useState } from "react"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ApplicationState } from '../../store'
import * as RepositoriesActions from '../../store/ducks/repositories/actions'
import RepositoryItem from '../RepositoryItem'


export default function RepositoryList() {
    const repositories = useSelector((state: ApplicationState) => state.repositories.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(RepositoriesActions.loadRequest())
    }, [])
    
    return (
        <ul>
            {repositories.map(repository => (
                <RepositoryItem key={repository.id} repository={repository}/>
            ))}
        </ul>
    )
}