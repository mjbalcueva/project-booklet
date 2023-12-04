import { FC } from "react"

import { Book, Paginate } from "@/types"

import { EmptyState } from "../empty-state"
import { BookCard } from "./book-card"

interface Props {
	bookData: Paginate & {
		data: Book[] | []
	}
}

const BookList: FC<Props> = ({ bookData }) => {
	return (
		<>
			{bookData.data.length === 0 ? (
				<EmptyState message="No books uploaded yet." />
			) : (
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
					{bookData.data.map((book) => (
						<BookCard book={book} />
					))}
				</div>
			)}
		</>
	)
}

export { BookList }