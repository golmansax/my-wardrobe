require 'rails_helper'

describe PurchasesController do
  let(:purchase) { create(:outerwear).purchases.first }
  let(:purchase_as_json) do
    {
      id: purchase.id,
      clothingItemId: purchase.clothing_item.slug,
      date: '2014-07-01',
      version: 'Navy',
      purposeIds: [],
    }
  end

  describe '#index' do
    it 'returns a json of clothing items' do
      purchase
      get(:index, format: :json)

      expected_response = [purchase_as_json].map(&:with_indifferent_access)
      expect(JSON.parse(response.body)).to eq(expected_response)
    end
  end
end
