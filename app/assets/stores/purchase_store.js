//= require stores/backbone_store_factory
//= require collections/purchase_collection

App.OutfitStore = new App.BackboneStoreFactory(App.PurchaseCollection);
