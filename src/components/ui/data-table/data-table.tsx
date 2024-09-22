"use client"

import { CSSProperties, useState } from "react"
import React from "react"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { DataTablePagination } from "./data-table-pagination"
import { DataTableToolbar } from "./data-table-toolbar"

const DEFAULT_TABLE_COLUMN_WIDTH = 150

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  paginationHidden?: boolean
  section?: "listening" | "reading"
}

export default function DataTable<TData, TValue>({
  columns,
  data,
  paginationHidden,
  section,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({})
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])

  // Helper function for listening section
  const getListeningQuestion = (index: number) => {
    const partNumber = Math.floor(index / 10) + 1
    const questionStart = (partNumber - 1) * 10 + 1
    const questionEnd = partNumber * 10

    return {
      partNumber,
      questionStart,
      questionEnd,
    }
  }

  // Helper function for reading section
  const getReadingPartAndRange = (index: number) => {
    switch (true) {
      case index < 13:
        return { part: 1, questionStart: 1, questionEnd: 13 }
      case index < 26:
        return { part: 2, questionStart: 14, questionEnd: 26 }
      default:
        return { part: 3, questionStart: 27, questionEnd: 40 }
    }
  }

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    initialState: {
      pagination: {
        pageSize: 40,
      },
    },
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <div className="space-y-4">
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader className="text-gray-950">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const styles: CSSProperties =
                    header.getSize() !== DEFAULT_TABLE_COLUMN_WIDTH
                      ? { width: `${header.getSize()}px` }
                      : {}
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      style={styles}
                      className="text-gray-950">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <React.Fragment key={row.id}>
                  {section === "listening" && index % 10 === 0 && (
                    <TableRow className="bg-[#F2F6FD]">
                      <TableCell
                        colSpan={columns.length}
                        className="text-left text-sm">
                        Part {getListeningQuestion(index).partNumber}: Question{" "}
                        {getListeningQuestion(index).questionStart}-
                        {getListeningQuestion(index).questionEnd}
                      </TableCell>
                    </TableRow>
                  )}
                  {section === "reading" &&
                    ((index === 0 &&
                      getReadingPartAndRange(index).part === 1) ||
                      (index === 13 &&
                        getReadingPartAndRange(index).part === 2) ||
                      (index === 26 &&
                        getReadingPartAndRange(index).part === 3)) && (
                      <TableRow className="bg-[#F2F6FD]">
                        <TableCell
                          colSpan={columns.length}
                          className="text-left text-sm">
                          Part {getReadingPartAndRange(index).part}: Question{" "}
                          {getReadingPartAndRange(index).questionStart}-
                          {getReadingPartAndRange(index).questionEnd}
                        </TableCell>
                      </TableRow>
                    )}
                  <TableRow data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
