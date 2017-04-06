module.exports = `{
  __schema{
    types {
      name
      kind
      fields {
        name
        type {
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
        description
        args {
          name
          type {
            kind
            ofType {
              kind
            }
          }
          defaultValue
        }
      }
    }
  }
}`;