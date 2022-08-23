/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.get('/', async () => {

  return { hello: 'World' }
});

Route.group( () => {

  // Route.get('/', 'PokemonController.index');
  // Route.get('/:id', 'PokemonController.show');
  // Route.post('/', 'PokemonController.store');
  // Route.put('/:id', 'PokemonController.update');
  // Route.delete('/:id', 'PokemonController.destroy');

  Route.resource('pokemon', 'PokemonController').apiOnly();

}).prefix('api')
