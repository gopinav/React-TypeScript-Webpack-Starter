import React from 'react'
import { Counter } from './Counter'
import {
  useCreatingResourceMutation,
  useDeleteResourceMutation,
  useGetPostsByIdQuery,
  useGetPostsQuery,
} from '@src/redux/usersApi'

export const App = () => {
  const {
    data: posts = [],
    error: errorPosts,
    isLoading: isLoadingPosts,
  } = useGetPostsQuery('')
  console.log(posts, errorPosts, isLoadingPosts)

  const {
    data: postsById = {},
    error: errorPostsById,
    isLoading: isLoadingPostsById,
  } = useGetPostsByIdQuery('1')

  if (errorPostsById) {
    console.log(errorPostsById)
  }

  const [addUser, { isLoading, isError }] = useCreatingResourceMutation()
  const [
    deleteUser,
    { isLoading: deleteUserisLoading, isError: errorDeleteUser },
  ] = useDeleteResourceMutation()

  const handleAddUser = async () => {
    await addUser({
      userId: 1,
      title: 'foo',
      body: 'bar',
      //эта штука нужна, если мы хотим использовать доп состояния запроса, иначе их не вызовешь (isLoading, isError)
    }).unwrap()
  }

  const handleDeleteUser = async (id: number) => {
    await deleteUser(id).unwrap()
  }

  return (
    <>
      {isLoadingPosts ? (
        <>LOADING</>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} onClick={() => handleDeleteUser(post.id)}>
              {post.id}
              {post.title}
            </li>
          ))}
        </ul>
      )}
      <button type="button" onClick={(): Promise<void> => handleAddUser()}>
        Add users
      </button>
      <Counter />
    </>
  )
}
