import React from 'react'

export default function TableHead() {
    return (
        <>
            <thead className = "text-center bg-secondary text-white">
                <tr >
                    <th scope="col">Company</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col"></th>
                    <th scope="col">Current Val</th>
                </tr>
            </thead>

        </>
    )
}
