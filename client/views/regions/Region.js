import React, { useState, useEffect } from 'react'
import apiRegion from './ApiRegion'
import PageHeader from '../../components/PageHeader'
import AddEditRegion from './AddEditRegion'

import {
    PencilAltIcon,
    TrashIcon,
  } from '@heroicons/react/solid'

export default function Region() {

    const [regions, setRegions] = useState([]);
    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState(false);
    // digunakan untuk edit region, kita butuh region_id
    const[region,setRegion] = useState({
        region_id : undefined,
        actionType : undefined
    })

    useEffect(() => {
        // call api
        apiRegion.list().then(data => {
            //jika response sukses, then fill data to regions variable using setRegions
            setRegions(data)
        }).catch(err => {
            console.log(err)
        });

    }, []); //jika useEffect parameter kedua di isi empty array[], useEffect akan di run 1 kali.

    useEffect(() => {

        apiRegion.list().then(data => {
            setRegions(data);
            setStatus(false);
        }).catch(err => {
            console.log(err)
        });

    }, [status]); // jika status berubah maka useEffect di trigger kembali

    const onDelete = async (id) => {
        apiRegion.remove(id).then(result => {
            console.log(result);
            setStatus(true)
        })
    }

    const onCreate = async () => {
       setRegion({
           region_id : undefined,
           actionType : 'Add'
       })
       setModal(true)
    }

    const onEdit = async (id) => {
        setRegion({
            region_id : id,
            actionType : 'Edit'
        })
        setModal(true)
     }



    return (
        <div>
            <PageHeader title={'Regions'} setModal={() => onCreate()} />


            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Region Name
                                        </th>

                                        <th
                                            className="px-6 py-3 col-span-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {regions.map((data) => (
                                        <tr key={data.region_id}>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.region_name}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                                                    <span className="hidden sm:block mr-2">
                                                        <button
                                                            onClick={() => {
                                                                onEdit(data.region_id)
                                                            }}
                                                            type="button"
                                                            className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                        >
                                                          <PencilAltIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                                        </button>
                                                    </span>
                                                    <span className="hidden sm:block">
                                                        <button
                                                            onClick={() => {
                                                                if (
                                                                    window.confirm(
                                                                        "Are you sure you wish to delete this item?"
                                                                    )
                                                                )
                                                                    onDelete(data.region_id)
                                                            }}
                                                            type="button"
                                                            className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                        >
                                                             <TrashIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {modal ? <AddEditRegion
                title={'Add Region'}
                setModal={() => setModal(false)}
                setStatus={() => setStatus(true)}
                region = {region}
            /> : null}

        </div>
    )
}