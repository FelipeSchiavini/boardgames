/* eslint no-use-before-define: "error" */

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  uuid: { input: string; output: string }
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>
  _gt?: InputMaybe<Scalars['Int']['input']>
  _gte?: InputMaybe<Scalars['Int']['input']>
  _in?: InputMaybe<Array<Scalars['Int']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['Int']['input']>
  _lte?: InputMaybe<Scalars['Int']['input']>
  _neq?: InputMaybe<Scalars['Int']['input']>
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>
  _gt?: InputMaybe<Scalars['String']['input']>
  _gte?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>
  _in?: InputMaybe<Array<Scalars['String']['input']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>
  _lt?: InputMaybe<Scalars['String']['input']>
  _lte?: InputMaybe<Scalars['String']['input']>
  _neq?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>
  _nin?: InputMaybe<Array<Scalars['String']['input']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
}

/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['Int']['input']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>
  on_conflict?: InputMaybe<Products_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input
  on_conflict?: InputMaybe<Products_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>
  _set?: InputMaybe<Products_Set_Input>
  where: Products_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>
  _set?: InputMaybe<Products_Set_Input>
  pk_columns: Products_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  picture: Scalars['String']['output']
  price: Scalars['String']['output']
}

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate'
  aggregate?: Maybe<Products_Aggregate_Fields>
  nodes: Array<Products>
}

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields'
  avg?: Maybe<Products_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Products_Max_Fields>
  min?: Maybe<Products_Min_Fields>
  stddev?: Maybe<Products_Stddev_Fields>
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>
  sum?: Maybe<Products_Sum_Fields>
  var_pop?: Maybe<Products_Var_Pop_Fields>
  var_samp?: Maybe<Products_Var_Samp_Fields>
  variance?: Maybe<Products_Variance_Fields>
}

/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>
  _not?: InputMaybe<Products_Bool_Exp>
  _or?: InputMaybe<Array<Products_Bool_Exp>>
  description?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  picture?: InputMaybe<String_Comparison_Exp>
  price?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductsPkey = 'products_pkey',
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>
}

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['String']['input']>
  price?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields'
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
  picture?: Maybe<Scalars['String']['output']>
  price?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields'
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
  picture?: Maybe<Scalars['String']['output']>
  price?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Products>
}

/** on conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint
  update_columns?: Array<Products_Update_Column>
  where?: InputMaybe<Products_Bool_Exp>
}

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  picture?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['Int']['input']
}

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  Price = 'price',
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['String']['input']>
  price?: InputMaybe<Scalars['String']['input']>
}

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields'
  id?: Maybe<Scalars['Int']['output']>
}

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  Price = 'price',
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "products" */
  products: Array<Products>
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Products_Order_By>>
  where?: InputMaybe<Products_Bool_Exp>
}

export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Products_Order_By>>
  where?: InputMaybe<Products_Bool_Exp>
}

export type Query_RootProducts_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input']
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "products" */
  products: Array<Products>
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Products_Order_By>>
  where?: InputMaybe<Products_Bool_Exp>
}

export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Products_Order_By>>
  where?: InputMaybe<Products_Bool_Exp>
}

export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input']
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  email: Scalars['String']['output']
  first_name: Scalars['String']['output']
  id: Scalars['uuid']['output']
  last_name: Scalars['String']['output']
  picture?: Maybe<Scalars['String']['output']>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>
  _not?: InputMaybe<Users_Bool_Exp>
  _or?: InputMaybe<Array<Users_Bool_Exp>>
  email?: InputMaybe<String_Comparison_Exp>
  first_name?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  last_name?: InputMaybe<String_Comparison_Exp>
  picture?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>
  first_name?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  last_name?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  email?: Maybe<Scalars['String']['output']>
  first_name?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  last_name?: Maybe<Scalars['String']['output']>
  picture?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  email?: Maybe<Scalars['String']['output']>
  first_name?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  last_name?: Maybe<Scalars['String']['output']>
  picture?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns?: Array<Users_Update_Column>
  where?: InputMaybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>
  first_name?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  last_name?: InputMaybe<Order_By>
  picture?: InputMaybe<Order_By>
}

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input']
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Picture = 'picture',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>
  first_name?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  last_name?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['String']['input']>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Picture = 'picture',
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>
  _gt?: InputMaybe<Scalars['uuid']['input']>
  _gte?: InputMaybe<Scalars['uuid']['input']>
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['uuid']['input']>
  _lte?: InputMaybe<Scalars['uuid']['input']>
  _neq?: InputMaybe<Scalars['uuid']['input']>
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>
}

export type GetAllProductsQueryQueryVariables = Exact<{ [key: string]: never }>

export type GetAllProductsQueryQuery = {
  __typename?: 'query_root'
  products: Array<{
    __typename?: 'products'
    description?: string | null
    id: number
    name: string
    picture: string
    price: string
  }>
}

export type CreateUserMutationMutationVariables = Exact<{
  user: Users_Insert_Input
}>

export type CreateUserMutationMutation = {
  __typename?: 'mutation_root'
  insert_users_one?: {
    __typename?: 'users'
    email: string
    first_name: string
    id: string
    picture?: string | null
    last_name: string
  } | null
}
