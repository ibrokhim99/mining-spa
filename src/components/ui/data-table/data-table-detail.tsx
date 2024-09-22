"use client"

import { CSSProperties, useState } from "react"

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

interface DataTableRow<TData> {
  isSection?: boolean // To identify if the row is a section
  sectionTitle?: string // Title for the section row
  data?: TData // Actual data for the row
}
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[] // Only define columns for normal data rows
  data: (DataTableRow<TData> | TData)[] // Accept rows that are either section headers or data rows
  paginationHidden?: boolean
}

function isSectionRow<TData>(
  row: TData | DataTableRow<TData>,
): row is DataTableRow<TData> {
  return (row as DataTableRow<TData>).isSection !== undefined
}

const DEFAULT_TABLE_COLUMN_WIDTH = 150

export function DataTableDetail<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState<{ [key: string]: boolean }>(
    {},
  )
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])

  // Filter out section rows from data
  const filteredData = data.filter((row) => row)

  const table = useReactTable({
    data: filteredData as TData[],
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
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ width: `${header.getSize()}px` }}
                    className="text-gray-950">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) =>
                isSectionRow(row.original) ? (
                  <TableRow key={row.id} className="bg-[#F2F6FD]">
                    <TableCell colSpan={columns.length} className="font-bold ">
                      {row.original.sectionTitle}
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow
                    key={row.id}
                    data-state={rowSelection[row.id] ? "selected" : undefined}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ),
              )
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
