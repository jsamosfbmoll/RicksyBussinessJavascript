# RicksyBusiness in Javascript

[Original repo in java](https://github.com/jsamosfbmoll/ExamenRicksyBusiness)

Ricksy Business is an exam done in java, it's about an episode of Rick and Morty where there is a party. There are several services for each guest: crystals, menus, and ufos. Each guest has a credit card with a code associated to it and a quantity predefined.

Every time a guest enters in the party automatically are charged to his account and the services are given to it.

## Dependencies

The dependencies are:

CreditCard: Is the credit card object for every guest with his own amount.

UfosPark: is the ufo's constructor function, it is getted from a singleton and has "Ufo"s objects.

CrystalExpender: expender for crystals packs.

RickMenuDispatcher: expender that dispatchs menus.

Receptivo: it dispatchs all the services for every customer automatically.

## Install instructions

The project has been developed in yarn, for installing the dependencies:

```bash
# In project root
yarn install
```