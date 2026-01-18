import { $api } from "../api";
import { GiftFormValues, GiftIdeasResponse } from "../types/gift-form.type";

class GiftService {
  _PATH = "gift-ideas";

  async getAllIdeas(body: GiftFormValues) {
    try {
      const response = await $api.post<GiftIdeasResponse>(`${this._PATH}`, {
        data: body,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching gift ideas:", error);
      throw error;
    }
  }
}

export const giftService = new GiftService();
