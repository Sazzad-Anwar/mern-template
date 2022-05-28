import React from 'react';
import useSWR from 'swr'
import Fetcher from "../components/Fetcher";
import Login from './Login';
import Registration from './Registration';

export default function AuthPage() {
    const { data } = useSWR('/users/hasSuperAdmin', Fetcher);

    data && data?.hasSuperAdmin ? <Login /> : <Registration />
}
