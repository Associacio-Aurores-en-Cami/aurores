"use client";

import { Table } from "flowbite-react";

const TaulaPreus = () => {
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>TEMPS</Table.HeadCell>
          <Table.HeadCell>PREU BASE</Table.HeadCell>
          <Table.HeadCell>21% IVA</Table.HeadCell>
          <Table.HeadCell>PREU FINAL</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              1h
            </Table.Cell>
            <Table.Cell>45,00€</Table.Cell>
            <Table.Cell>9,45€</Table.Cell>
            <Table.Cell>54,50€</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              2h
            </Table.Cell>
            <Table.Cell>82,65€</Table.Cell>
            <Table.Cell>17,36€</Table.Cell>
            <Table.Cell>100,00€</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">3h</Table.Cell>
            <Table.Cell>120,00€</Table.Cell>
            <Table.Cell>25,20€</Table.Cell>
            <Table.Cell>145,20€</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">4h</Table.Cell>
            <Table.Cell>150,00€</Table.Cell>
            <Table.Cell>31,50€</Table.Cell>
            <Table.Cell>181,50€</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
export default TaulaPreus;