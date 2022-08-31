import { Fragment } from "react";
import Button from "./Button";

const Table = (props) => {
    return ( 
        <Fragment>
            <table className="overflow-x-auto relative">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="py-3 px-4">Rank</th>
                            {props.columns.map(({header, field}, index) => (
                                <th key={index} scope="col" className={`py-3 px-6`}>{header}</th>
                            ))}
                            <th className="py-3 px-4 flex justify-center items-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.list.map((data, dataIdx) => (
                            <tr key={data.id} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${props.styleRowCondition(data)}`}>
                                <th className="py-4 px-4 font-medium text-xs text-gray-900 whitespace-nowrap dark:text-white" key={data.id}>{dataIdx + 1}</th>
                                {props.columns.map(({field}, index) => {
                                    return (
                                        <th key={index} className={`py-4 px-4 font-medium text-xs text-gray-900 whitespace-nowrap dark:text-white `}>
                                            <div className="flex justify-center items-center">
                                                {data[field]}{props.dataAndColCondition({data, field}) || ''}
                                            </div>
                                        </th>
                                    )
                                })}
                                <th className="py-4 px-6 font-medium text-xs text-gray-900 whitespace-nowrap dark:text-white">
                                    <button onClick={() => {props.onClick(data.id)}} className="hover:text-violet-700">Show History</button>
                                    {/* <Button onClick={() => {props.onClick(data.id)}} label={'Show'}/> */}
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </Fragment> 
    );
}
 
export default Table;