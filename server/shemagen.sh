# READ VAR FROM .env
HASURA_URI=$(grep HASURA_URI .env | grep -v "#"  |  cut -d '=' -f2)
HASURA_GRAPHQL_ADMIN_SECRET=$(grep HASURA_GRAPHQL_ADMIN_SECRET .env | grep -v "#" | cut -d '=' -f2)

gq $HASURA_URI -H 'X-Hasura-Admin-Secret: '$HASURA_GRAPHQL_ADMIN_SECRET'' --introspect > schema.graphql
gq $HASURA_URI -H 'X-Hasura-Admin-Secret: '$HASURA_GRAPHQL_ADMIN_SECRET'' --introspect --format json > schema.json
