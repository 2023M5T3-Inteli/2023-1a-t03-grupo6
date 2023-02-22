- interceptors are used across and shared by all modules

- interceptors are akin to Express middlewares :
  can be applied to single handler, all handlers in controller or globally
  - standard : use with class-transformer serializers eg Exclude
    use in place of dto, but less flexible
  - custom : more flexible, used by adapting dto architecture

* Nest.js Interface
  naming convention : class NameInterceptor
  method convention : intercept(context: ExecutionContext, next: CallHandler)
  'intercept' method is called automatically by Nest
  'context' provides information on incoming request or outgoing response
  'next' provides reference to next handler in controller

* How Interceptor works:
  - receives an Entity Instance eg User
  - process instance into specific DTO that describes how to serialize data for the particular route handler
  - sends a processed DTO instance to client
